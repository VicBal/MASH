type SeriesSize = 'sm' | 'md' | 'lg';

export interface SimpleOptions {
  text: string;
  showSeriesCount: boolean;
  seriesCountSize: SeriesSize;
}

interface SocketNames {
  produceNum: 'produceNum';
  produceRate: 'produceRate';
  consumeRate: 'consumeRate';
  consumeAll: 'consumeAll';
  overloadPartition: 'overloadPartition';
  createTopic: 'createTopic';
  underReplicate: 'underReplicate';
}
export const SocketNames: SocketNames = {
  produceNum: 'produceNum',
  produceRate: 'produceRate',
  consumeRate: 'consumeRate',
  consumeAll: 'consumeAll',
  overloadPartition: 'overloadPartition',
  createTopic: 'createTopic',
  underReplicate: 'underReplicate',
};

// eslint:
// tslint:disable:no-namespace
export namespace SocketMessages {
  export type produceNum = { messagesCount: number; topic: string };

  export type produceRate = {
    rate: number;
    topic: string;
  };
  export type consumeRate = {
    rate: number;
    topic: string;
  };

  export type overloadPartition = {
    topic: string;
    numPartitions: number;
    messages: number;
  };

  export type createTopic = {
    topic: string;
  };

  export type consumeAll = {
    topic: string;
  };
  export type underReplicate = {
    topic: string;
    numReplicants: number;
  };
}
export interface ProduceResponse {
  key: string;
  value: {
    name: string;
    quote: string;
    image_url: string;
  };
}
