export default class Sale {
  id: number | undefined;
  date: Date | undefined;
  unit_price: number | undefined;
  total_price: number | undefined;
  created_at: Date | undefined;
  updated_at: Date | undefined;
  customer: { id: number | undefined, person: { name: string | undefined, surname: string | undefined, lastname: string | undefined, identity_document: string | undefined } | undefined } | undefined;
  flight: { id: number | undefined, code: string | undefined } | undefined;
  payment_method: { id: number | undefined, name: string | undefined } | undefined;

  static fromJson(data: any) {
    let sale = new Sale();
    sale.id = data.id;
    sale.date = data.date;
    sale.unit_price = data.unit_price;
    sale.total_price = data.total_price;
    sale.created_at = data.created_at;
    sale.updated_at = data.updated_at;
    sale.customer = data.customer;
    sale.flight = data.flight;
    sale.payment_method = data.payment_method;
    return sale;
  }

  static fromJsonList(data: any[]) {
    let sales: Sale[] = [];
    data.forEach((sale) => {
      sales.push(Sale.fromJson(sale));
    });
    return sales;
  }
}
