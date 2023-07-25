export class Video {
  constructor(
    public readonly id: string,
    public readonly iso_639_1: string,
    public readonly iso_3166_1: string,
    public readonly name: string,
    public readonly key: string,
    public readonly site: string,
    public readonly size: number,
    public readonly type: string,
    public readonly official: boolean,
    public readonly published_at: string
  ) {}
}
