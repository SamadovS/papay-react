export interface MeLiked {
  mb_id: string;
  like_ref_id: string;
  my_favorite: boolean;
}

export interface Product {
  _id: string;
  product_name: string;
  product_collection: string;
  product_status: string;
  product_price: number;
  product_discount: number;
  product_left_cnt: number;
  product_size: number;
  product_volume: number;
  product_description: string;
  product_images: string[];
  product_views: number;
  product_likes: number;
  restaurant_mb_id: string;
  createdAt: Date;
  updateAt: Date;
  me_liked: MeLiked[];
}
