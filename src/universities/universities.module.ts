import { Module } from '@nestjs/common';
import { UniversitiesService } from './universities.service';
import { UniversitiesResolver } from './universities.resolver';

@Module({
  providers: [UniversitiesResolver, UniversitiesService]
})
export class UniversitiesModule {}
