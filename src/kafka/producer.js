import Kafka from 'node-rdkafka'

const producer = new Kafka.HighLevelProducer({
  'metadata.broker.list': 'localhost:9092',
})

// Throw away the keys
producer.setKeySerializer(function(v) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(null)
    }, 20)
  })
})

// Take the message field
producer.setValueSerializer(function(v) {
  return Buffer.from(v.message)
})

producer.connect(null, function() {
  producer.produce('quickstart-events', null, {
    message: JSON.stringify({ some: "test", object: [2, 42]}),
  }, 'test', Date.now(), function(err, offset) {
    // The offset if our acknowledgement level allows us to receive delivery offsets
    setImmediate(function() {
      producer.disconnect()
    })
  })
})
