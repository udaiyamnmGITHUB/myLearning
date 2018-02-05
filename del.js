import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReportsComponent } from './reports.component';
import { ChooseReportComponent } from './choose-report/choose-report.component';
import { AuthGuardService } from '../../authentication/services/auth-guard.service';

const reportRoutes: Routes = [
    { 	  
	  path: 'report',
	  component: ReportsComponent,canActivateChild: [ AuthGuardService ],	
	  children: [ 
		{
			path: 'contact-report',
			component: ChooseReportComponent	
		}
	  ]
	}
];

@NgModule({
  imports: [ RouterModule.forChild(reportRoutes) ],
  exports: [ RouterModule ]
})
export class ReportRoutingModule{ }

