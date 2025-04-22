import {
  Component,
  inject,
  Input,
  OnChanges,
  SimpleChanges,
} from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-notifications",
  standalone: false,
  templateUrl: "./notifications.component.html",
  styleUrl: "./notifications.component.scss",
})
export class NotificationsComponent implements OnChanges {
  @Input({ required: true }) message!: string;
  private _snackBar = inject(MatSnackBar);

  ngOnChanges(changes: SimpleChanges): void {
    this.openSnackBar(changes["message"]?.currentValue?.name);
  }
  openSnackBar(message: string) {
    if (message) {
      this._snackBar.open(message, "Added");
    }
  }
}
