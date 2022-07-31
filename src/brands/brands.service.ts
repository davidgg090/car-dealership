import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 } from 'uuid';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';

@Injectable()
export class BrandsService {
  private brands: Brand[] = [
    // {
    //   id: v4(),
    //   name: 'Toyota',
    //   createdAt: new Date().getTime(),
    // },
  ];
  create(createBrandDto: CreateBrandDto) {
    const brand: Brand = {
      id: v4(),
      name: createBrandDto.name.toLocaleLowerCase(),
      createdAt: new Date().getTime(),
    };
    this.brands.push(brand);
    return brand;
  }

  findAll() {
    return this.brands
  }

  findOne(id: string) {
    const brand = this.brands.find((brand) => brand.id === id);
    if (!brand) {
      throw new NotFoundException();
    }
    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    const brandDB = this.findOne(id);
    this.brands = this.brands.map((brand) => {
      if (brand.id === id) {
        brandDB.updatedAt = new Date().getTime();
        brand = { ...brandDB, ...updateBrandDto };
        return brandDB;
      }
      return brand;
    });
  }

  remove(id: string) {
    this.brands = this.brands.filter((brand) => {
      brand.id !== id;
    });
  }

  fillBrandsWithSeedData(brands: Brand[]) {
    this.brands = brands;
  }
}
