Angular 17 features:

1) New Control Flow features:
    @if, @for, @switch

2) @if (user.loggedIn) {
   } @else {

   }

3) @for (user of userList; tracker user) {
      //write logic
   } @empty {

   }

   //track will make efficient of forloop.

4) @switch(membershipstatus) {
    @case ("gold") {

    } @default {

    }
   }

5) Lazy loading(It will help to reduce bundle size)
  export const ROUTES: ROUTE[]= [
    {
        path: 'user',
        loadComponent: () => import('./user.component')
                              .then(m => m.UserComponent)
    },
  ];

6) @defer built in triggers
   a) idle ->  loads as soon as your browser reports it is in an idle state.
   b) interaction -> load when element is clicked,focussed or similiar behavior.
   c) viewport -> loads when the content enters the clients viewport window.
   d) hover
   e) timer
   f) immediate.


   @defer (on viewport(trigger)) {
     <largecomponent/>
   }


   @defer (on interaction(trigger)) {

   }@placeholder (minimum 500ms) {
        //default image.
   }@loading (minimum 500ms) {
     //spinner
   }

   g) using when clause and we can create our own custom triggers

7) custom @Input Transforms 
   <text-input [disabled]="true"> <!-- Before -->
   <text-input disabled> <!--after -->

   <!-- Transforms String input to boolean automatically -->
   @Input( { transform: booleanAttribute})
   disabled: boolean = false;
    
8) esbuild and vite are now enabled by default


  




