import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

const routes = [{
    path: '', children: [
        { path: 'workspace', loadChildren: () => import('./workspace/workspace.module').then(m => m.WorkspaceModule) },
        { path: '**', redirectTo: 'workspace', },
    ]
}
];
@NgModule({
    imports: [
        RouterModule.forRoot(routes, { useHash: true, scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}