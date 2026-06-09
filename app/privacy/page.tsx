import type { Metadata } from "next";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Политика конфиденциальности",
  description: "Политика конфиденциальности и обработки персональных данных компании Артезианс-плюс.",
  alternates: { canonical: "https://artesian-plus.ru/privacy" },
  robots: { index: false, follow: false },
};

export default function PrivacyPage() {
  const date = "01 января 2025 г.";

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <h1 className="text-3xl font-bold text-primary mb-2">Политика конфиденциальности</h1>
      <p className="text-sm text-muted mb-8">Дата вступления в силу: {date}</p>

      <div className="prose prose-sm sm:prose max-w-none text-muted leading-relaxed space-y-6">
        <section>
          <h2 className="text-lg font-bold text-text-main">1. Общие положения</h2>
          <p>
            Настоящая политика конфиденциальности (далее — «Политика») определяет порядок обработки
            и защиты персональных данных пользователей сайта{" "}
            <strong className="text-text-main">artesian-plus.ru</strong> (далее — «Сайт»),
            принадлежащего {company.name} (далее — «Оператор»).
          </p>
          <p>
            Политика разработана в соответствии с Федеральным законом от 27.07.2006 № 152-ФЗ
            «О персональных данных».
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-text-main">2. Состав персональных данных</h2>
          <p>Оператор обрабатывает следующие персональные данные, которые пользователь предоставляет
          добровольно при заполнении формы обратной связи:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Имя (необязательное поле)</li>
            <li>Номер телефона (обязательное поле)</li>
            <li>Текст сообщения (необязательное поле)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-text-main">3. Цели обработки персональных данных</h2>
          <p>Персональные данные обрабатываются в следующих целях:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Обработка входящих заявок и обращений пользователей</li>
            <li>Связь с пользователем для уточнения деталей заявки</li>
            <li>Предоставление информации об услугах компании</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-text-main">4. Правовое основание обработки</h2>
          <p>
            Обработка персональных данных осуществляется на основании свободно данного, конкретного,
            информированного и сознательного согласия субъекта персональных данных (ст. 9 Федерального
            закона № 152-ФЗ).
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-text-main">5. Порядок и условия обработки данных</h2>
          <p>
            Оператор обрабатывает персональные данные с соблюдением следующих условий:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Данные не передаются третьим лицам без согласия пользователя, за исключением
            случаев, предусмотренных законодательством РФ.</li>
            <li>Данные хранятся до достижения целей обработки или до отзыва согласия.</li>
            <li>Пользователь вправе в любой момент отозвать согласие, обратившись по телефону <a href={company.phones[0].href} className="text-primary underline">{company.phones[0].number}</a>.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-text-main">6. Права субъекта персональных данных</h2>
          <p>В соответствии с Федеральным законом № 152-ФЗ пользователь имеет право:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Получить сведения об обработке его персональных данных</li>
            <li>Потребовать уточнения, блокирования или уничтожения персональных данных</li>
            <li>Отозвать согласие на обработку персональных данных</li>
            <li>Обжаловать действия (бездействие) Оператора в уполномоченном органе</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-text-main">7. Контактная информация</h2>
          <p>
            По вопросам, связанным с обработкой персональных данных, обращайтесь:
          </p>
          <ul className="list-none space-y-1">
            <li>Телефон: <a href={company.phones[0].href} className="text-primary underline">{company.phones[0].number}</a></li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-text-main">8. Изменение политики</h2>
          <p>
            Оператор оставляет за собой право вносить изменения в настоящую Политику. Актуальная
            версия размещается на сайте. Продолжение использования Сайта после публикации изменений
            означает согласие с ними.
          </p>
        </section>
      </div>
    </div>
  );
}
