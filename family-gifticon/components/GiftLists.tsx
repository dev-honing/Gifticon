import { Gift, GiftList } from '../interface/interface';

const GiftLists: React.FC<GiftList> = ({ gifts }) => { // GiftList 인터페이스로 props의 타입을 지정
  return (
    <div>
      {gifts.map((gift: Gift) => ( // gifts props로 각 기프티콘을 렌더링
        <div key={gift.id}>
          <h2>{gift.name}</h2>
          <p>{gift.category.join(', ')}</p>
          <p>{gift.expiryDate.toISOString().substring(0, 10)}</p> {/* YYYY-MM-DD 형식의 문자열로 변환 */}
          <img src={gift.imgURL} alt={gift.name} />
        </div>
      ))}
    </div>
  );
};

export default GiftLists;