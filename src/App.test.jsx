import { screen, waitFor } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import PageTransitionGroup from './common/PageTransitionGroup';
import { render } from './utils/test';
import { ProtectedRoute } from './common/session';
import { act } from 'react';

function PageTransitionGroupWithAnimation({ clazz }) {
  return (
    <PageTransitionGroup
      onEnter={el => expect(el).toHaveClass(`${clazz}-enter`)}
      onEntering={el => expect(el).toHaveClass(`${clazz}-enter-active`)}
      onEntered={el => expect(el).toHaveClass(`${clazz}-enter-done`)}
      onExit={el => expect(el).toHaveClass(`${clazz}-exit`)}
      onExiting={el => expect(el).toHaveClass(`${clazz}-exit-active`)}
      onExited={el => expect(el).toHaveClass(`${clazz}-exit-done`)}
    />
  );
}

describe('PageTransitionGroup', () => {
  test('should render default page', () => {
    const router = createMemoryRouter(
      [
        {
          path: '/',
          element: <PageTransitionGroup />,
          children: [
            {
              index: true,
              element: <div data-testid="login">Login</div>,
            },
            {
              path: 'iphone',
              element: <div data-testid="iphone">iPhone</div>,
            },
          ],
        },
      ],
      { initialEntries: [{ pathname: '/' }] }
    );
    render(<RouterProvider router={router} />);
    expect(screen.getByTestId('login')).toBeInTheDocument();
  });

  test('should transition with specified animation', async () => {
    const router = createMemoryRouter(
      [
        {
          path: '/',
          element: <PageTransitionGroupWithAnimation clazz="scale-down" />,
          children: [
            {
              index: true,
              element: <div data-testid="login">Login</div>,
            },
            {
              path: 'iphone',
              element: <div data-testid="iphone">iPhone</div>,
            },
          ],
        },
      ],
      { initialEntries: [{ pathname: '/' }] }
    );

    render(<RouterProvider router={router} />);

    expect(screen.getByTestId('login')).toBeInTheDocument();

    act(() => {
      router.navigate('/iphone', {
        state: {
          animate: true,
          referer: '/',
          transitionClass: 'scale-down',
        },
      });
    });

    expect(screen.getByTestId('iphone')).toBeInTheDocument();
    await waitFor(() => expect(screen.queryByTestId('login')).not.toBeInTheDocument());
  });

  test('should transition with animation based on referer', async () => {
    const router = createMemoryRouter(
      [
        {
          path: '/',
          element: <PageTransitionGroupWithAnimation clazz="slide-from-right" />,
          children: [
            {
              path: 'watch',
              element: <div data-testid="watch">Watch</div>,
            },
            {
              path: 'macbook-pro',
              element: <div data-testid="macbook-pro">MacBook Pro</div>,
            },
          ],
        },
      ],
      { initialEntries: [{ pathname: '/watch' }] }
    );

    render(<RouterProvider router={router} />);

    expect(screen.getByTestId('watch')).toBeInTheDocument();

    act(() => {
      router.navigate('/macbook-pro', {
        state: {
          referer: '/watch',
          animate: true,
        },
      });
    });

    expect(screen.getByTestId('macbook-pro')).toBeInTheDocument();
    await waitFor(() => expect(screen.queryByTestId('watch')).not.toBeInTheDocument());
  });

  test('should transition without animation', async () => {
    const router = createMemoryRouter(
      [
        {
          path: '/',
          element: <PageTransitionGroupWithAnimation clazz="no-anim" />,
          children: [
            {
              index: true,
              element: <div data-testid="login">Login</div>,
            },
            {
              path: 'iphone',
              element: <div data-testid="iphone">iPhone</div>,
            },
          ],
        },
      ],
      { initialEntries: [{ pathname: '/' }] }
    );

    render(<RouterProvider router={router} />);

    expect(screen.getByTestId('login')).toBeInTheDocument();

    act(() => {
      router.navigate('/iphone', {
        state: {
          referer: '/',
        },
      });
    });

    expect(screen.getByTestId('iphone')).toBeInTheDocument();
    await waitFor(() => expect(screen.queryByTestId('login')).not.toBeInTheDocument());
  });

  test('should redirect to default page when not authenticated', async () => {
    const router = createMemoryRouter(
      [
        {
          path: '/',
          element: <PageTransitionGroup />,
          children: [
            {
              index: true,
              element: <div data-testid="login">Login</div>,
            },
            {
              path: 'iphone',
              element: (
                <ProtectedRoute>
                  <div data-testid="iphone">iPhone</div>
                </ProtectedRoute>
              ),
            },
          ],
        },
      ],
      { initialEntries: [{ pathname: '/iphone' }] }
    );

    render(<RouterProvider router={router} />);

    expect(screen.getByTestId('login')).toBeInTheDocument();
  });
});
