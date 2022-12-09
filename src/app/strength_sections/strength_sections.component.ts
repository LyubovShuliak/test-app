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

  handlePasswordChange(colorClasses: SectionsColors) {
    for (const key in this.colors) {
      this.colors[key as keyof SectionsColors] =
        colorClasses[key as keyof SectionsColors];
    }
  }

  handleStrengthChange(password: string) {
    if (!password.length) {
      this.handlePasswordChange(PASSWORD_STRENGTH.EMPTY.classes);
      this.strength = PASSWORD_STRENGTH.EMPTY.name;
      return;
    }
    if (password && password?.length < 8) {
      this.handlePasswordChange(PASSWORD_STRENGTH.SHORT.classes);
      this.strength = PASSWORD_STRENGTH.SHORT.name;
      return;
    }
    const letters = password.match(/[a-zA-Z]/gm);
    const digits = password.match(/\d/gm);
    const symbols = password.match(/[\W_]/gm);

    const easy =
      letters?.length === password.length ||
      digits?.length === password.length ||
      symbols?.length === password.length;

    const medium =
      (letters && digits) || (digits && symbols) || (letters && symbols);

    const strong = letters && digits && symbols;

    if (easy) {
      this.handlePasswordChange(PASSWORD_STRENGTH.EASY.classes);
      this.strength = PASSWORD_STRENGTH.EASY.name;
      return;
    }
    if (strong) {
      this.handlePasswordChange(PASSWORD_STRENGTH.STRONG.classes);
      this.strength = PASSWORD_STRENGTH.STRONG.name;
      return;
    }
    if (medium) {
      this.handlePasswordChange(PASSWORD_STRENGTH.MEDIUM.classes);
      this.strength = PASSWORD_STRENGTH.MEDIUM.name;
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
