# sheet modal

This is a custom component that acts like a sheet modal but can be placed on an `ion-content` and will site behind tabs.

### Usage

### Add BrowserAnimationsModule
Add `BrowserAnimationsModule` to your `app.module.ts` (make sure only one is referenced in your app)
```typescript
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
...
@NgModule({
...
imports: [... BrowserAnimationsModule],
...
});
```

### Add sheet-modal

Copy the [`sheet-modal`](./src/app/sheet-modal) folder into your project.

Add to your module:
```typescript
import { SheetModalModule } from '../sheet-modal/sheet-modal.module';
...
@NgModule({
  imports: [
...
    SheetModalModule
  ],
...
});
```


Place just underneath `<ion-content>`:
```html
<app-sheet-modal [isOpen]="showToday">
    <div class="my-content">
...
    </div>
  </app-sheet-modal>
  ```

The `isOpen` property will default to `false`. When changed will trigger an animation.
