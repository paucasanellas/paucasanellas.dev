export const useDate = (date: Date) => {
  const dayjs = useDayjs()
  const i18n = useI18n()

  return dayjs(date).locale(i18n.locale.value)
}
