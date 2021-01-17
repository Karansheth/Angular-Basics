import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductInfoService {

  constructor() { }

  getImages(): string[]{
    return ['iphone11.jpg', 'Dell-XPS-15.jpg', 'Philips-Trimmer.jpg', 'LG-Refrigerator.jpg', 'BMW.jpg'];
  }

  getProductNames(): string[]{
    return ['iphone11', 'Dell XPS 15', 'Philips Trimmer', 'LG Refrigerator', 'BMW'];
  }

  getProductCodes(): string[]{
    return ['P6743', 'P84738', 'P4367', 'P3923487', 'P3728732'];
  }

  getBranchNames(): string[]{
    return ['iTronics', 'Dell Exclusive Store', 'Light Lounge', 'Mudit Refrigerator',
    'BMW Gallops Autohouse'];
  }

  getBranchCodes(): number[]{
    return [10752, 848547, 434845, 48374, 8473847];
  }

  getShippingAddresses(): string[]{
    return ['Arushi Bunglows', 'Shefali Flats', 'Satyam Skyline', 'Hastiraj Society',
    'New Samrat Society'];
  }

}
