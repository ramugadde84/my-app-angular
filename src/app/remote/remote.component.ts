import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-client-remote',
  template: '<iframe src="http://localhost:53334/remotedata" width="100%" height="100%" style="border: none;"></iframe>',
})
export class RemoteComponent {}
