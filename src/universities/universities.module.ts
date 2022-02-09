import { Module } from '@nestjs/common';
import { UniversitiesService } from './universities.service';
import { UniversitiesResolver } from './universities.resolver';
import { DataModule } from 'src/data/data.module';

@Module({
  providers: [UniversitiesResolver, UniversitiesService],
  imports: [DataModule],
})
export class UniversitiesModule {}
