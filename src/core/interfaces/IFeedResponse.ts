import { URL } from 'url';

interface IHref {
  href: URL;
}

interface IImage {
  $: IHref;
}

interface IFile {
  url: URL;
  length: number;
  type: string;
}

interface IEnclosure {
  $: IFile;
}

interface IItem {
  title: string[];
  'itunes:image': IImage[];
  link?: URL[];
  description: string[];
  pubDate: Date[];
  'itunes:duration': string[];
  enclosure: IEnclosure[];
}

interface IChannel {
  item: IItem[];
}

interface IRss {
  channel: IChannel[];
}

export default interface IFeedResponse {
  rss: IRss;
}
