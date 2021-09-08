import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of, throwError } from 'rxjs';
import { WeatherComponent } from './weather.component';
import { ApiService } from 'src/app/providers/api.service';
import { By } from '@angular/platform-browser';

const mockResponseData = {
  'coord': {
    'lon': 4.8897,
    'lat': 52.374
  },
  'weather': [
    {
      'id': 802,
      'main': 'Clouds',
      'description': 'scattered clouds',
      'icon': '03d'
    }
  ],
  'main': {
    'temp': 11.56,
    'pressure': 1016,
    'humidity': 85
  },
  'wind': {
    'speed': 3.58,
  },
  'dt': 1621953209,
  'sys': {
    'country': 'NL',
  },
  'name': 'Amsterdam'
};


describe('WeatherComponent', () => {
  let component: WeatherComponent;
  let fixture: ComponentFixture<WeatherComponent>;
  const apiService = jasmine.createSpyObj('ApiService', ['getCityWeather']);
  const getCitySpy = apiService.getCityWeather.and.returnValue(of(mockResponseData))
  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherComponent ],
      imports:[HttpClientTestingModule],
      providers: [
        { provide: ApiService, useValue: apiService }
      ]
    })
    .compileComponents(); 
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherComponent);
    component = fixture.componentInstance;
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the weather info from the API', async() => {
    component.getWeatherData('Amsterdam');
    fixture.detectChanges();
    expect(getCitySpy.calls.any()).toBe(true);
    
    const debugElement = fixture.debugElement.query(By.css('.city')).nativeElement.textContent;
    fixture.detectChanges();
    expect(debugElement).toBe('Amsterdam');

  });

  it("should render error message when city is not found", async () => {
    getCitySpy.and.returnValue(throwError({ status: 404 }));

    component.getWeatherData('Jakarta');
    fixture.detectChanges();

    const debugElement = fixture.debugElement.query(By.css('.text-danger')).nativeElement.textContent;

    expect(debugElement).toContain('is not found');
  });

  it("should not render weather icon if icon data is unavailable", async () => {
    getCitySpy.and.returnValue(of({ ...mockResponseData, weather: [] }));

    component.getWeatherData('Amsterdam');
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.weather-icon')).not.toBeTruthy();
  });


});
