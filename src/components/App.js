import { Component } from 'react';
// import { nanoid } from 'nanoid';
import { Layout } from './Layout';
import { StickerForm } from './StickerForm/StickerForm';
import { StickerList } from './StickerList/StickerList';

export class App extends Component {
  render() {
    return (
      <Layout>
        <StickerForm />
        <StickerList items={[]} />
      </Layout>
    );
  }
}
