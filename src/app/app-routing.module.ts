import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProduitsComponent } from './produits/produits.component';
import { NouveauProduitComponent } from './nouveau-produit/nouveau-produit.component';
import { EditProductComponent } from './edit-product/edit-product.component';


const routes: Routes = [
  {
    path:"products",component:ProduitsComponent,
  },
  {
    path:"new-product", component: NouveauProduitComponent

  },
  {
    path:"edit-product/:id", component: EditProductComponent

  },
  {
    path:"",redirectTo:"/products", pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
