describe('App Config', () => {
  const config = useAppConfig()
  it('should return an object', () => {
    expect(config).toBeTypeOf('object')
  })

  it('should have a app name', () => {
    expect(config.app.name).toBeTypeOf('string')
  })
})
