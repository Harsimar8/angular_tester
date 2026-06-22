export interface Control {

  id: string;

  type:
    | 'button'
    | 'slider'
    | 'lamp'
    | 'gauge';

  tagName: string;

  value: number;
}