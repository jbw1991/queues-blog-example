export type MessageSendOptions = {
  // Reserved
};

export type MessageSendRequest<Body = unknown> = {
  body: Body;
} & MessageSendOptions;

export interface Queue<Body = unknown> {
  send(message: Body, options?: MessageSendOptions): Promise<void>;
  sendBatch(batch: Iterable<MessageSendRequest<Body>>): Promise<void>;
}

export interface Message<Body = unknown> {
  readonly id: string;
  readonly timestamp: Date;
  readonly body: Body;
  retry(): void;
}

export interface MessageBatch<Body = unknown> {
  readonly queue: string;
  readonly messages: Message<Body>[];
  retryAll(): void;
}
