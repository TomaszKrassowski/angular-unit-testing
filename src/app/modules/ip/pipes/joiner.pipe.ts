import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'joiner',
})
export class JoinerPipe implements PipeTransform {
  transform(joiner: string, ...args: string[]): string {
    return args.join(joiner);
  }
}
