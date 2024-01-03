import { MeLiked } from "./product";
import { Member } from "./user";

export interface BoArticle {
  _id: string;
  art_subject: string;
  art_content: string;
  art_image?: string | null;
  bo_id: string;
  art_status: string;
  art_views: number;
  art_likes: number;
  mb_id: string;
  createdAt: Date;
  updateAt: Date;
  member_data: Member;
  mb_liked: MeLiked[];
}
