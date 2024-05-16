import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length } from 'class-validator';

export default class Document {
  @IsString({ message: 'Ошибка! Значение должно быть строкой' })
  @Length(2, 255, { message: 'Ошибка! Неккоректная длина строки' })
  @ApiProperty({ example: 'Удостоверение о повышении квалификации', description: 'Вид документа' })
  documentType: string;

  @IsString({ message: 'Ошибка! Значение должно быть строкой' })
  @Length(2, 255, { message: 'Ошибка! Неккоректная длина строки' })
  @ApiProperty({ example: 'Оригинал', description: 'Статус документа' })
  status: string;

  @IsString({ message: 'Ошибка! Значение должно быть строкой' })
  @Length(2, 255, { message: 'Ошибка! Неккоректная длина строки' })
  @ApiProperty({ example: 'Справка из органов внутренних дел', description: 'Подтверждение утраты' })
  lossConfirmation: string;

  @IsString({ message: 'Ошибка! Значение должно быть строкой' })
  @Length(2, 255, { message: 'Ошибка! Неккоректная длина строки' })
  @ApiProperty({ example: '«Обмен по причине порчи', description: 'Подтверждение обмена' })
  exchangeConfirmation: string;

  @IsString({ message: 'Ошибка! Значение должно быть строкой' })
  @Length(2, 255, { message: 'Ошибка! Неккоректная длина строки' })
  @ApiProperty({ example: 'Да', description: 'Подтверждение уничтожения' })
  destructionConfirmation: string;

  @IsString({ message: 'Ошибка! Значение должно быть строкой' })
  @Length(2, 20, { message: 'Ошибка! Неккоректная длина строки' })
  @ApiProperty({ example: 'ПРТ117701', description: 'Серия документа' })
  documentSeries: string;

  @IsString({ message: 'Ошибка! Значение должно быть строкой' })
  @Length(2, 30, { message: 'Ошибка! Неккоректная длина строки' })
  @ApiProperty({ example: '000001', description: 'Номер документа' })
  documentNumber: string;

  @IsString({ message: 'Ошибка! Значение должно быть строкой' })
  @Length(10, 10, { message: 'Ошибка! Неккоректная длина строки' })
  @ApiProperty({ example: '20.06.2012', description: 'Дата выдачи документа' })
  issueDate: string;

  @IsString({ message: 'Ошибка! Значение должно быть строкой' })
  @Length(2, 25, { message: 'Ошибка! Неккоректная длина строки' })
  @ApiProperty({ example: '1548', description: 'Регистрационный номер' })
  registrationNumber: string;

  @IsString({ message: 'Ошибка! Значение должно быть строкой' })
  @Length(2, 255, { message: 'Ошибка! Неккоректная длина строки' })
  @ApiProperty({
    example: 'Повышение квалификации',
    description: 'Дополнительная профессиональная программа (повышение квалификации/профессиональная переподготовка)',
  })
  additionalProfessionalProgramType?: string;

  @IsString({ message: 'Ошибка! Значение должно быть строкой' })
  @Length(2, 255, { message: 'Ошибка! Неккоректная длина строки' })
  @ApiProperty({
    example: 'Строительство и эксплуатация автомобильных дорог и аэродромов',
    description: 'Наименование дополнительной профессиональной программы',
  })
  additionalProfessionalProgramName: string;

  @IsString({ message: 'Ошибка! Значение должно быть строкой' })
  @Length(2, 255, { message: 'Ошибка! Неккоректная длина строки' })
  @ApiProperty({
    example: 'Культура, искусство',
    description: 'Наименование области профессиональной деятельности',
  })
  professionalArea?: string;

  @IsString({ message: 'Ошибка! Значение должно быть строкой' })
  @Length(2, 255, { message: 'Ошибка! Неккоректная длина строки' })
  @ApiProperty({
    example: 'Электронная техника, радиотехника и связь',
    description: 'Укрупненные группы специальностей',
  })
  specialtiesGroup?: string;

  @IsString({ message: 'Ошибка! Значение должно быть строкой' })
  @Length(2, 255, { message: 'Ошибка! Неккоректная длина строки' })
  @ApiProperty({ example: 'Инженер', description: 'Наименование квалификации' })
  qualificationName: string;

  @IsString({ message: 'Ошибка! Значение должно быть строкой' })
  @Length(2, 255, { message: 'Ошибка! Неккоректная длина строки' })
  @ApiProperty({ example: 'Высшее образование', description: 'Уровень образования ВО/СПО' })
  educationLevel?: string;

  @IsString({ message: 'Ошибка! Значение должно быть строкой' })
  @Length(2, 100, { message: 'Ошибка! Неккоректная длина строки' })
  @ApiProperty({
    example: 'Иванов',
    description: 'Фамилия указанная в дипломе ВО или СПО',
  })
  surnameHEorSPE?: string;

  @IsString({ message: 'Ошибка! Значение должно быть строкой' })
  @Length(2, 20, { message: 'Ошибка! Неккоректная длина строки' })
  @ApiProperty({ example: 'ПРТ117701', description: 'Серия документа о ВО/СПО' })
  seriesHEorSPE?: string;

  @IsString({ message: 'Ошибка! Значение должно быть строкой' })
  @Length(2, 30, { message: 'Ошибка! Неккоректная длина строки' })
  @ApiProperty({ example: '000001', description: 'Номер документа о ВО/СПО' })
  numberHEorSPE?: string;

  @IsString({ message: 'Ошибка! Значение должно быть строкой' })
  @Length(4, 4, { message: 'Ошибка! Неккоректная длина строки' })
  @ApiProperty({ example: '2006', description: 'Год начала обучения (для документа о квалификации)' })
  startYear: string;

  @IsString({ message: 'Ошибка! Значение должно быть строкой' })
  @Length(4, 4, { message: 'Ошибка! Неккоректная длина строки' })
  @ApiProperty({ example: '2010', description: 'Год окончания обучения (для документа о квалификации)' })
  endYear: string;

  @IsString({ message: 'Ошибка! Значение должно быть строкой' })
  @Length(1, 10, { message: 'Ошибка! Неккоректная длина строки' })
  @ApiProperty({ example: '999', description: 'Срок обучения, часов (для документа о квалификации)' })
  durationInHours: string;

  @IsString({ message: 'Ошибка! Значение должно быть строкой' })
  @Length(2, 100, { message: 'Ошибка! Неккоректная длина строки' })
  @ApiProperty({ example: 'Иван', description: 'Имя получателя' })
  recipientName: string;

  @IsString({ message: 'Ошибка! Значение должно быть строкой' })
  @Length(2, 100, { message: 'Ошибка! Неккоректная длина строки' })
  @ApiProperty({ example: 'Иванов', description: 'Фамилия получателя' })
  recipientSurname: string;

  @IsString({ message: 'Ошибка! Значение должно быть строкой' })
  @Length(2, 100, { message: 'Ошибка! Неккоректная длина строки' })
  @ApiProperty({ example: 'Иванович', description: 'Отчество получателя ' })
  recipientPatronymic: string;

  @IsString({ message: 'Ошибка! Значение должно быть строкой' })
  @Length(10, 10, { message: 'Ошибка! Неккоректная длина строки' })
  @ApiProperty({ example: '11.11.1981', description: 'Дата рождения' })
  recipientBirthday: string;

  @IsString({ message: 'Ошибка! Значение должно быть строкой' })
  @Length(3, 3, { message: 'Ошибка! Неккоректная длина строки' })
  @ApiProperty({ example: 'Муж', description: 'Пол' })
  recipientGender: string;

  @IsString({ message: 'Ошибка! Значение должно быть строкой' })
  @Length(14, 14, { message: 'Ошибка! Неккоректная длина строки' })
  @ApiProperty({ example: '123-456-789 10', description: 'СНИЛС' })
  recipientSNILS: string;

  @IsString({ message: 'Ошибка! Значение должно быть строкой' })
  @Length(2, 255, { message: 'Ошибка! Неккоректная длина строки' })
  @ApiProperty({ example: 'Очная', description: 'Форма обучения' })
  educationForm: string;

  @IsString({ message: 'Ошибка! Значение должно быть строкой' })
  @Length(2, 255, { message: 'Ошибка! Неккоректная длина строки' })
  @ApiProperty({ example: 'Федеральный бюджет', description: 'Источник финансирования обучения' })
  educationFundingSource: string;

  @IsString({ message: 'Ошибка! Значение должно быть строкой' })
  @Length(2, 255, { message: 'Ошибка! Неккоректная длина строки' })
  @ApiProperty({
    example: 'В образовательной организации',
    description: 'Форма получения образования на момент прекращения образовательных отношений',
  })
  educationEndForm: string;

  @IsString({ message: 'Ошибка! Значение должно быть строкой' })
  @Length(3, 3, { message: 'Ошибка! Неккоректная длина строки' })
  @ApiProperty({ example: '643', description: 'Гражданство получателя (код страны по ОКСМ)' })
  recipientCitizenship: string;

  @IsString({ message: 'Ошибка! Значение должно быть строкой' })
  @Length(2, 100, { message: 'Ошибка! Неккоректная длина строки' })
  @ApiProperty({
    example: 'Свидетельство о повышении квалификации',
    description: 'Наименование документа об образовании (оригинала)',
  })
  originalDocumentName?: string;

  @IsString({ message: 'Ошибка! Значение должно быть строкой' })
  @Length(2, 16, { message: 'Ошибка! Неккоректная длина строки' })
  @ApiProperty({ example: 'ПРТ117701', description: 'Серия (оригинала)' })
  originalSeries?: string;

  @IsString({ message: 'Ошибка! Значение должно быть строкой' })
  @Length(2, 16, { message: 'Ошибка! Неккоректная длина строки' })
  @ApiProperty({ example: '000001', description: 'Номер (оригинала)' })
  originalNumber?: string;

  @IsString({ message: 'Ошибка! Значение должно быть строкой' })
  @Length(2, 25, { message: 'Ошибка! Неккоректная длина строки' })
  @ApiProperty({ example: '1548', description: 'Регистрационный N (оригинала)' })
  originalRegistrationNumber?: string;

  @IsString({ message: 'Ошибка! Значение должно быть строкой' })
  @Length(10, 10, { message: 'Ошибка! Неккоректная длина строки' })
  @ApiProperty({ example: '20.06.2012', description: 'Дата выдачи (оригинала)' })
  originalIssueDate?: string;

  @IsString({ message: 'Ошибка! Значение должно быть строкой' })
  @Length(2, 100, { message: 'Ошибка! Неккоректная длина строки' })
  @ApiProperty({ example: 'Иван', description: 'Имя получателя (оригинала)' })
  originalRecipientName?: string;

  @IsString({ message: 'Ошибка! Значение должно быть строкой' })
  @Length(2, 100, { message: 'Ошибка! Неккоректная длина строки' })
  @ApiProperty({ example: 'Иванов', description: 'Фамилия получателя (оригинала)' })
  originalRecipientSurname?: string;

  @IsString({ message: 'Ошибка! Значение должно быть строкой' })
  @Length(2, 100, { message: 'Ошибка! Неккоректная длина строки' })
  @ApiProperty({ example: 'Иванович', description: 'Отчество получателя (оригинала)' })
  originalRecipientPatronymic?: string;

  @IsString({ message: 'Ошибка! Значение должно быть строкой' })
  @Length(2, 100, { message: 'Ошибка! Неккоректная длина строки' })
  @ApiProperty({ description: 'Номер документа для изменения' })
  documentNumberForChange?: string;
}
