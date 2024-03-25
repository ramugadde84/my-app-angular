import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'product',
    loadComponent: () => import('./products/products.component')
      .then(m => m.ProductsComponent)
  },
  {
    path: 'vendor',
    loadComponent: () => import('./vendors/vendors.component')
      .then(m => m.VendorsComponent)
  },
  {
    path: 'drag',
    loadComponent: () => import('./dragdrop/dragdrop.component')
      .then(m => m.DragdropComponent)
  },
  {
    path: 'widget',
    loadComponent: () => import('./widget/widget.component')
      .then(m => m.WidgetComponent)
  },
  {
    path: 'defer',
    loadComponent: () => import('./defer-example/defer-example.component')
      .then(m => m.DeferExampleComponent)
  },
  {
    path: 'signals',
    loadComponent: () => import('./signal-test/signal-test.component')
      .then(m => m.SignalTestComponent)
  },
  {
    path: 'table',
    loadComponent: () => import('./sample-table/sample-table.component')
      .then(m => m.SampleTableComponent)
  },
  {
    path: 'remotedata',
    loadComponent: () => import('./remote/remote.component')
      .then(m => m.RemoteComponent)
  }
];   
