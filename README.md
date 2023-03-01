# sheet modal

This is a custom component that acts like a sheet modal but can be placed on an `ion-content` and will sit behind tabs. It uses [@angular/animations](https://angular.io/guide/animations) to slide up/down based on its `isOpen` property.


https://user-images.githubusercontent.com/84595830/222260506-44b1e7a2-47ab-4926-b8a7-2b0d5a4bffa8.mp4


### Usage

### Add BrowserAnimationsModule
To allow animations to work make sure `BrowserAnimationsModule` is to your `app.module.ts`:
(make sure only one instance is referenced in your app)

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

Add to your page's module:
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

### Use on your page
Place just underneath `<ion-content>`:

```html
<app-sheet-modal [isOpen]="showToday">
    <div class="my-content">
...
    </div>
  </app-sheet-modal>
  ```

The `isOpen` property will default to `false`. When it is changed it will trigger an animation.
