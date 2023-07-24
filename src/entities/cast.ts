export class Cast {
  constructor(
    public readonly id: number,
    public readonly adult: boolean,
    public readonly gender: number,
    public readonly known_for_department: string,
    public readonly name: string,
    public readonly original_name: string,
    public readonly popularity: number,
    public readonly profile_path: string | null,
    public readonly cast_id: number,
    public readonly character: string,
    public readonly credit_id: string,
    public readonly order: number
  ) {}
}
