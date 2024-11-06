import { isPlatformServer } from "@angular/common";
import { Directive, Inject, OnInit, PLATFORM_ID, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "[AppShellRender]",
  standalone: true
})
export class AppShellRenderDirective implements OnInit{

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  ngOnInit(): void {
    if(isPlatformServer(this.platformId)) {
      this.viewContainer.createEmbeddedView(this.templateRef)
    }
    else {
      this.viewContainer.clear()
    }
  }
}