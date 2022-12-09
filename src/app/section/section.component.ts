import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PASSWORD_STRENGTH } from 'src/constants';
import { SectionsColors } from 'src/types';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css'],
})
export class SectionComponent implements OnChanges {
  @Input() password: string = '';

  colors: SectionsColors = { first: '', second: '', third: '' };

  ngOnChanges(changes: SimpleChanges) {
    const password = changes['password'].currentValue;
    if (!password) {
      for (const key in this.colors) {
        this.colors[key as keyof SectionsColors] =
          PASSWORD_STRENGTH.EMPTY[key as keyof SectionsColors];
      }
      return;
    }
    if (password && password?.length < 8) {
      for (const key in this.colors) {
        this.colors[key as keyof SectionsColors] =
          PASSWORD_STRENGTH.SHORT[key as keyof SectionsColors];
      }
      return;
    } else {
      const letters = password.match(/[a-zA-Z]/gm);
      const digits = password.match(/\d/gm);
      const symbols = password.match(/[\W_]/gm);
      if (
        letters?.length === password.length ||
        digits?.length === password.length ||
        symbols?.length === password.length
      ) {
        for (const key in this.colors) {
          this.colors[key as keyof SectionsColors] =
            PASSWORD_STRENGTH.EASY[key as keyof SectionsColors];
        }
        return;
      } else if (letters && digits && symbols) {
        console.log(symbols);

        for (const key in this.colors) {
          this.colors[key as keyof SectionsColors] =
            PASSWORD_STRENGTH.STRONG[key as keyof SectionsColors];
        }
        return;
      } else if (
        (letters && digits) ||
        (digits && symbols) ||
        (letters && symbols)
      ) {
        for (const key in this.colors) {
          this.colors[key as keyof SectionsColors] =
            PASSWORD_STRENGTH.MEDIUM[key as keyof SectionsColors];
        }
        return;
      }
    }
  }

  getFirstSectionColor() {
    return this.colors.first;
  }
  getSecondSectionColor() {
    return this.colors.second;
  }
  getThirdSectionColor() {
    return this.colors.third;
  }
}
