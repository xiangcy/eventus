CarrierWave.configure do |config|
  config.root = Rails.root.join('tmp') # adding these...
  config.cache_dir = 'carrierwave' # ...two lines
  config.fog_credentials = {
    provider: "AWS" ,                    # required
    aws_access_key_id: "AKIAIG3GMO6GOJV3LDLQ",                      # required
    aws_secret_access_key: "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"                    # required
  }
  config.fog_directory  = "eventus-online"                     # required
end
