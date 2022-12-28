import { AppDataState } from "./../../../../_States/appState";
import { Observable, map, startWith, catchError, of } from "rxjs";
import { Component, OnInit } from "@angular/core";
import { DataStateEnum } from "app/_States/appState";
import { Permission } from "app/Models/Permission";
import { Router } from "@angular/router";
import { StorageSService } from "app/_services/storageService/storage-s.service";
import { UserService } from "app/_services/UserService/user.service";

@Component({
  selector: "app-listpermission",
  templateUrl: "./listpermission.component.html",
  styleUrls: ["./listpermission.component.css"],
})
export class ListpermissionComponent implements OnInit {
  readonly DataStateEnum = DataStateEnum;
  public permission: Permission | null = null;
  public permissions$?: Observable<AppDataState<Permission>> | null = null;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getAllPermissions();
  }

  getAllPermissions() {
    this.permissions$ = this.userService.getAllPermissions().pipe(
      map((data) => {
        return { dataState: DataStateEnum.LOADED, data: data };
      }),
      startWith({ dataState: DataStateEnum.LOADING }),
      catchError((error) =>
        of({ dataState: DataStateEnum.ERROR, errorMessage: error.Message })
      )
    );
  }

  onDeletePermission(permission: Permission) {
    let v = confirm("vous voulez supprimer cette permission ");
    if (v === true)
      this.userService.DeletePermission(permission).subscribe({
        next: () => {
          this.getAllPermissions();
        },
      });
  }
}
