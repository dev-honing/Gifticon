// components/GiftLists.tsx

import { useEffect, useState } from 'react';
// Gift 인터페이스 정의
interface Gift {
  id: number;
  title: string;
  store: '메가커피' | '스타벅스' | '기타';
  expiry: string;
  type: '교환권' | '할인권';
  img: string;
}

const GiftLists = () => {
  // useState의 초기값을 Gift 배열로 설정
  const [gifts, setGifts] = useState<Gift[]>([]);

  useEffect(() => {
    fetch('http://localhost:7777/gifts')
      .then(response => response.json())
      .then(data => setGifts(data)); // 'gifts' 키가 없는 경우 data를 그대로 사용
  }, []);

  return (
    <div>
      {gifts.map((gift) => (
        <div key={gift.id}>
          <h2>{gift.title}</h2>
          <p>{gift.store}</p>
          <p>{gift.expiry}</p>
          <p>{gift.type}</p>
          <p>{gift.img}</p>
        </div>
      ))}
    </div>
  );
}

export default GiftLists;
