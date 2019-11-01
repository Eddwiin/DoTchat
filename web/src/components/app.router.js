import React, { lazy, Suspense} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

const AuthContainer = lazy(() => import('./auth/auth.container'))
const ChatContainer = lazy(() => import('./chat/chat.container'));
const Error404Compoennt = lazy(() => import('./share/error-404/error-404.component'));

const AppRouter = () => (
    <Suspense fallback={<div>Loading...</div>}>
        <Switch>
             <Route exact path="/auth/:action" component={AuthContainer}></Route>
             <Route exact path="/home/chat" component={ChatContainer}></Route>
             <Redirect from="/" to="/auth/login"></Redirect>
             <Route path="/error404" component={Error404Compoennt}></Route>
         </Switch>
    </Suspense>
)

export default AppRouter;


// export default class AppRouterComponent extends React.Component {
//     render() {
//      return (
//         <Switch>
//             <Route exact path="/auth/:action" component={AuthContainer}></Route>
//             <Route exact path="/home/chat" component={ChatContainer}></Route>
//             <Redirect from="/" to="/auth/login"></Redirect>
//             <Route component={NotFoundComponent}></Route>
//         </Switch>
//      )   
//     }
// }


