export interface Gift {
  id: number; // 기프티콘 고유번호
  name: string; // 기프티콘 이름
  category: string[]; // 기프티콘 카테고리
  expiryDate: Date; // 기프티콘 만료일
  imgURL: string; // 기프티콘 이미지 URL(S3)
  used: '아직' | '사용함'; // 기프티콘 사용 여부
  store: string; // 기프티콘 사용처(매장)
  type: '할인권' | '교환권'; // 할인권 or 교환권
}

export interface GiftList {
  gifts: Gift[]; // 기프티콘 목록
} 