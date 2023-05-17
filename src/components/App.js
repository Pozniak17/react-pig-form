import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Layout } from './Layout';
import { StickerForm } from './StickerForm/StickerForm';
import { StickerList } from './StickerList/StickerList';
import initialStickers from '../stickers.json';

export class App extends Component {
  state = {
    stickers: initialStickers,
  };

  // тут ми приймаємо з форми img та label які ввели
  // та беремо старий масив об'єктів стікерів розпиляємо,
  // та додаємо новий об'єкт стікерів з властивостями з форми { img, label }
  // ===> stickers: [...prevState.stickers, { img, label }]
  addSticker = (img, label) => {
    console.log(img, label);
    this.setState(prevState => ({
      stickers: [
        ...prevState.stickers,
        {
          id: nanoid(),
          img,
          label,
        },
      ],
    }));
  };

  // ми хочемо залишити тільки ті стікери id яких не співпадають з stickerId якими ми хочемо видалити
  deleteSticker = stickerId => {
    this.setState(prevState => ({
      stickers: prevState.stickers.filter(sticker => sticker.id !== stickerId),
    }));
  };

  render() {
    return (
      <Layout>
        <StickerForm onSubmit={this.addSticker} />
        <StickerList
          items={this.state.stickers}
          onDelete={this.deleteSticker}
        />
      </Layout>
    );
  }
}
