export interface OrderItemProps {
  id: number;
  status: 'cancel' | 'delivered' | 'shipped';
  orderNumber: string;
  orderDate: string;
  deliverDate: string;
  numOfItems: number;
  price: number;
  paymentType: 'paid' | 'onDelivery';
}
