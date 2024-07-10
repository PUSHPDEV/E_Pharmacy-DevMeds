import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddNewMedicineComponent } from './add-new-medicine/add-new-medicine.component';
import { ViewMedicineDetailsComponent } from './view-medicine-details/view-medicine-details.component';
import { MedicineResolveServiceService } from './medicine-resolve-service.service';
import { MedicineViewDetailsComponent } from './medicine-view-details/medicine-view-details.component';
import { AuthGuard } from './_auth/auth.guard';
import { AdminComponent } from './admin/admin.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { BuyMedicineComponent } from './buy-medicine/buy-medicine.component';
import { BuyMedicineResolverService } from './buy-medicine-resolver.service';

const routes: Routes = [
  //  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard], data: { roles: ["Admin"] } },
  { path: 'user', component: UserComponent, canActivate: [AuthGuard], data: { roles: ["User"] } },
  { path: 'login', component: LoginComponent },
  { path: 'forbidden', component: ForbiddenComponent },
  {
    path: 'addNewMedicine', component: AddNewMedicineComponent, canActivate: [AuthGuard],
    data: { roles: ["Admin"] },

    resolve: {
      medicine: MedicineResolveServiceService
    },
  },
  {
    path: 'view', component: ViewMedicineDetailsComponent, canActivate: [AuthGuard],
    data: { roles: ["Admin"] },
  },
  { path: 'medicineViewDetails', component: MedicineViewDetailsComponent, resolve: { medicine: MedicineResolveServiceService } },
  {
    path: 'buyMedicine', component: BuyMedicineComponent, canActivate: [AuthGuard], data: { roles: ["User"] },
    resolve: {
      medicineDetails: BuyMedicineResolverService,
    },

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
