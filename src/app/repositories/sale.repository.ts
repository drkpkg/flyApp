import Sale from "../models/sale.model";
import {createStore, withProps} from "@ngneat/elf";
import {Injectable} from "@angular/core";

interface SaleProps {
  sale: Sale | null;
}

const SaleStore = createStore(
  {name: 'sale'},
  withProps<SaleProps>({sale: null})
);

@Injectable({
  providedIn: 'root'
})
export class SaleRepository {

  updateSale(sale: Sale) {
    SaleStore.update((state) => ({...state, sale: sale}));
  }
}
