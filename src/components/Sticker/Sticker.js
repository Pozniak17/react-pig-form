import { CardWrapper, Image, Label } from './Sticker.styled';

export const Sticker = ({ sticker: { id, img, label }, onDelete }) => {
  return (
    <CardWrapper>
      <Image src={img} alt={label} />
      <Label>{label}</Label>
      <button onClick={() => onDelete(id)}>Delete</button>
    </CardWrapper>
  );
};

// тут ми на клікі кнопки викликаємо анонімну функцію, яка викликає onDelete з App => StickerList => Sticker
// та передаємо в середину id нашого одного стікера.
