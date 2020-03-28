import {TestBed, async} from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';

describe('appComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [HttpClientModule]
    })
      .compileComponents()
      .catch(() => {});
  }));

  it('should create the app', () => {
    expect.assertions(1);
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;

    expect(app).toBeDefined();
  });
});
