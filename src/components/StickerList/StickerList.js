import { Sticker } from 'components/Sticker/Sticker';
import { List } from './StickerList.styled';

export const StickerList = ({ items, onDelete }) => {
  return (
    <List>
      {items.map((item, idx) => (
        <li key={idx}>
          <Sticker sticker={item} onDelete={onDelete} />
        </li>
      ))}
    </List>
  );
};

// Ми з App прокидуємо в StickerList метод з App deleteSticker
// в StickerList ми прокидуємо в глибину в компонент Sticker
// StickerList транзитний проп, який прокидує ще глибше.
