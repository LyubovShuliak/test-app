import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PASSWORD_STRENGTH } from 'src/constants';
import { SectionsColors } from 'src/types';

@Component({
  selector: 'app-section',
  templateUrl: './strength_sections.component.html',
  styleUrls: ['./strength_sections.component.css'],
})
export class SectionComponent implements OnChanges {
  @Input() password: string = '';

  colors: SectionsColors = { first: '', second: '', third: '' };
  strength = 'empty';

  ngOnChanges(changes: SimpleChanges) {
    const password = changes['password'].currentValue;
    this.handleStrengthChange(password);
  }

  handlePasswordChange(colorClasses: SectionsColors, strengthName: string) {
    for (const key in this.colors) {
      this.colors[key as keyof SectionsColors] =
        colorClasses[key as keyof SectionsColors];
    }
    this.strength = strengthName;
  }

  handleStrengthChange(password: string) {
    if (!password.length) {
      this.handlePasswordChange(
        PASSWORD_STRENGTH.EMPTY.classes,
        PASSWORD_STRENGTH.EMPTY.name
      );
      return;
    }
    if (password && password?.length < 8) {
      this.handlePasswordChange(
        PASSWORD_STRENGTH.SHORT.classes,
        PASSWORD_STRENGTH.SHORT.name
      );
      return;
    }
    const letters = password.match(/[a-z\u0430-\u04ff]/gim);
    const digits = password.match(/\d/gm);
    const symbols = password.match(/[^a-z\d\u0430-\u04ff]/gim);

    console.log('symbols', symbols);
    console.log('digits', digits);
    console.log('letters', letters);
    const easy =
      letters?.length === password.length ||
      digits?.length === password.length ||
      symbols?.length === password.length;

    const strong = letters && digits && symbols;

    const medium =
      (letters && digits) || (digits && symbols) || (letters && symbols);

    if (easy) {
      this.handlePasswordChange(
        PASSWORD_STRENGTH.EASY.classes,
        PASSWORD_STRENGTH.EASY.name
      );
      return;
    }
    if (strong) {
      this.handlePasswordChange(
        PASSWORD_STRENGTH.STRONG.classes,
        PASSWORD_STRENGTH.STRONG.name
      );
      return;
    }
    if (medium) {
      this.handlePasswordChange(
        PASSWORD_STRENGTH.MEDIUM.classes,
        PASSWORD_STRENGTH.MEDIUM.name
      );
      return;
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
