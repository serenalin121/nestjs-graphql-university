import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UniversitiesService } from './universities.service';
import { University } from './entities/university.entity';
import { CreateUniversityInput } from './dto/create-university.input';
import { UpdateUniversityInput } from './dto/update-university.input';
import { CreateUniversityWithNewCityInput } from './dto/create-university-with-new-city.input';

@Resolver(() => University)
export class UniversitiesResolver {
  constructor(private readonly universitiesService: UniversitiesService) {}

  @Mutation(() => University)
  createUniversity(
    @Args('createUniversityInput') createUniversityInput: CreateUniversityInput,
  ) {
    return this.universitiesService.create(createUniversityInput);
  }

  @Mutation(() => University)
  createUniversityWithNewCity(
    @Args('createUniversityWithNewCityInput')
    createUniversityWithNewCityInput: CreateUniversityWithNewCityInput,
  ) {
    return this.universitiesService.createWithNewCity(
      createUniversityWithNewCityInput,
    );
  }

  @Query(() => [University], { name: 'universities' })
  findAll() {
    return this.universitiesService.findAll();
  }

  @Query(() => University, { name: 'university' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.universitiesService.findOne(id);
  }

  @Mutation(() => University)
  updateUniversity(
    @Args('updateUniversityInput') updateUniversityInput: UpdateUniversityInput,
  ) {
    return this.universitiesService.update(
      updateUniversityInput.id,
      updateUniversityInput,
    );
  }

  @Mutation(() => University)
  removeUniversity(@Args('id', { type: () => Int }) id: number) {
    return this.universitiesService.remove(id);
  }
}
