export class PaymentMethod {
  /*
  id
name
description
created_at
updated_at
  * */

  id: number;
  name: string;
  description: string;
  created_at: Date;
  updated_at: Date;

  constructor() {
    this.id = 0;
    this.name = '';
    this.description = '';
    this.created_at = new Date();
    this.updated_at = new Date();
  }

  static fromJson(data: any) {
    let paymentMethod = new PaymentMethod();
    paymentMethod.id = data.id;
    paymentMethod.name = data.name;
    paymentMethod.description = data.description;
    paymentMethod.created_at = data.created_at;
    paymentMethod.updated_at = data.updated_at;
    return paymentMethod;
  }

  static fromJsonList(data: any[]) {
    let paymentMethods: PaymentMethod[] = [];
    data.forEach((paymentMethod) => {
      paymentMethods.push(PaymentMethod.fromJson(paymentMethod));
    });
    return paymentMethods;
  }
}
