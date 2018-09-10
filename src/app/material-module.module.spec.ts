import { MaterialModule } from './material-module.module';

describe('MaterialModule.ModuleModule', () => {
  let materialModuleModuleModule: MaterialModule;

  beforeEach(() => {
    materialModuleModuleModule = new MaterialModule();
  });

  it('should create an instance', () => {
    expect(materialModuleModuleModule).toBeTruthy();
  });
});
