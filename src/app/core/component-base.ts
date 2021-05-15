import { OnInit, OnDestroy, Injectable } from "@angular/core";
import { Subscription } from "rxjs";
@Injectable()
export class ComponentBase implements OnInit, OnDestroy {
  constructor() {}
  protected _subscriptions: Subscription[] = [];

  ngOnDestroy() {
    this.clearAllSubscriptions();
  }

  clearAllSubscriptions() {
    this._subscriptions.forEach(subscription => {
      if (subscription) {
        subscription.unsubscribe();
      }
    });
    this._subscriptions = [];
  }

  ngOnInit() {
    // Add initialisation related logic
  }
}
